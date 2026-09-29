import './style.css'
import { supabase } from './supabase.js'

const app = document.querySelector('#app')

const shell = () => `
  <main class="shell">
    <header class="brandbar">
      <div class="flag" aria-hidden="true"></div>
      <div>
        <div class="eyebrow">NASCAR RACING POOL</div>
        <h1>TOP <span>DRAW</span></h1>
      </div>
      <div class="status">TD-1.0</div>
    </header>
    <section id="screen"></section>
  </main>`

const login = (message='') => `
  <section class="login-card">
    <div class="race-line"></div>
    <p class="eyebrow">PRIVATE LEAGUE ACCESS</p>
    <h2>Race day starts here.</h2>
    <p class="muted">Sign in with your Top Draw player account.</p>
    ${message ? `<div class="notice">${message}</div>` : ''}
    <form id="login-form">
      <label>Email<input id="email" type="email" autocomplete="email" required placeholder="player@email.com"></label>
      <label>Password<input id="password" type="password" autocomplete="current-password" required placeholder="••••••••"></label>
      <button type="submit">SIGN IN</button>
    </form>
    <p class="footnote">Accounts are created and managed by the Commissioner.</p>
  </section>`

const raceBoard = (player) => `
  <section class="board">
    <div class="hero">
      <div><p class="eyebrow">2026 SEASON • DRAFT</p><h2>Race Board</h2></div>
      <button class="ghost" id="logout">SIGN OUT</button>
    </div>
    <div class="pots">
      <article><span>WEEKLY POT</span><strong>$0</strong><small>Awaiting first race</small></article>
      <article><span>SEASON POT</span><strong>$0</strong><small>2026 Top Draw</small></article>
    </div>
    <div class="race-empty">
      <div class="checkers"></div>
      <p class="eyebrow">NEXT RACE</p>
      <h3>Race setup pending</h3>
      <p>No race has been published yet. Once the field is approved and the draw is complete, assignments will appear here.</p>
    </div>
    <div class="players">
      ${['Chris','Joe','Logan','Julie','Jim'].map((name,i)=>`
        <article class="player-card">
          <div class="seat">0${i+1}</div>
          <div><strong>${name}</strong>${name==='Logan'?'<small>COMMISSIONER</small>':'<small>PLAYER</small>'}</div>
          <div class="points">—<small>PTS</small></div>
        </article>`).join('')}
    </div>
    <nav>
      <button class="active">RACE</button><button>STANDINGS</button><button>HISTORY</button><button>CHAT</button>
    </nav>
  </section>`

async function render() {
  app.innerHTML = shell()
  const screen=document.querySelector('#screen')
  const { data:{ session } } = await supabase.auth.getSession()
  if (!session) {
    screen.innerHTML=login()
    bindLogin()
    return
  }
  const { data: player } = await supabase.from('players').select('display_name,is_active,is_commissioner,login_enabled').eq('auth_user_id', session.user.id).maybeSingle()
  if (!player || !player.is_active || !player.login_enabled) {
    await supabase.auth.signOut()
    screen.innerHTML=login('This login is not linked to an active Top Draw player.')
    bindLogin()
    return
  }
  screen.innerHTML=raceBoard(player)
  document.querySelector('#logout').onclick=async()=>{await supabase.auth.signOut(); render()}
}

function bindLogin(){
  const form=document.querySelector('#login-form')
  form.addEventListener('submit', async e=>{
    e.preventDefault()
    const btn=form.querySelector('button')
    btn.disabled=true; btn.textContent='SIGNING IN…'
    const email=document.querySelector('#email').value.trim()
    const password=document.querySelector('#password').value
    const { error }=await supabase.auth.signInWithPassword({email,password})
    if(error){
      document.querySelector('#screen').innerHTML=login('Email or password was not accepted.')
      bindLogin()
    } else render()
  })
}

supabase.auth.onAuthStateChange(()=>{})
render()

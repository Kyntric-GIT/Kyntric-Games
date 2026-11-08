import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import {
  Search, Compass, Gamepad2, Users, UserRound, Settings,
  Plus, Bell, ChevronRight, Play, Star
} from "lucide-react";

type Game = {
  id: string;
  title: string;
  description: string;
  genre: string;
  color: string;
  players: string;
};

const games: Game[] = [
  { id: "block-world", title: "Block World", description: "Build, explore, and create your own adventure.", genre: "Adventure", color: "linear-gradient(135deg,#2e8bff,#7b4dff)", players: "1.2K" },
  { id: "obby-rush", title: "Obby Rush", description: "Jump through challenging obstacle courses.", genre: "Platformer", color: "linear-gradient(135deg,#ff8a3d,#ff3d77)", players: "842" },
  { id: "city-life", title: "City Life", description: "Make friends and explore a lively city.", genre: "Roleplay", color: "linear-gradient(135deg,#18b79a,#1769aa)", players: "563" },
  { id: "space-frontier", title: "Space Frontier", description: "Discover strange worlds beyond the stars.", genre: "Sci-Fi", color: "linear-gradient(135deg,#121d56,#8c45c8)", players: "391" },
];

function Sidebar() {
  const nav = [
    { to: "/", label: "Home", icon: Compass },
    { to: "/discover", label: "Discover", icon: Search },
    { to: "/games", label: "Games", icon: Gamepad2 },
    { to: "/friends", label: "Friends", icon: Users },
    { to: "/settings", label: "Settings", icon: Settings },
  ];
  return <aside className="sidebar">
    <Link to="/" className="brand"><span className="brand-mark">K</span><span>KYNTRIC<span className="brand-sub">GAMES</span></span></Link>
    <div className="nav-label">PLATFORM</div>
    {nav.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} end={to==="/"} className={({isActive}) => "nav-item"+(isActive?" active":"")}><Icon size={18}/>{label}</NavLink>)}
    <div className="sidebar-bottom">
      <div className="mini-profile"><div className="avatar">K</div><div><strong>Guest Player</strong><small>Guest account</small></div></div>
      <p className="tiny">Kyntric Games · Early Preview</p>
    </div>
  </aside>;
}

function Header() {
  return <header className="topbar">
    <div className="breadcrumbs">Kyntric Games <ChevronRight size={14}/> <span>Platform</span></div>
    <div className="top-actions"><button className="icon-btn" aria-label="Notifications"><Bell size={18}/></button><Link className="button button-muted" to="/users/demo/profile"><UserRound size={16}/> Profile</Link><Link className="button button-primary" to="/studio"><Plus size={16}/> Create</Link></div>
  </header>;
}

function GameCard({game}: {game: Game}) {
  return <Link to={`/games/${game.id}`} className="game-card">
    <div className="game-art" style={{background:game.color}}><div className="art-shapes"><span/><span/><span/></div><div className="game-art-title">{game.title}</div><div className="play-bubble"><Play size={20} fill="currentColor"/></div></div>
    <div className="game-card-info"><div><h3>{game.title}</h3><p>{game.description}</p></div><div className="game-meta"><span>{game.genre}</span><span><Users size={13}/>{game.players}</span></div></div>
  </Link>;
}

function Home() {
  return <main className="page">
    <section className="hero">
      <div className="hero-content"><div className="eyebrow"><span className="pulse"/> YOUR NEXT ADVENTURE STARTS HERE</div><h1>Play. Create.<br/><span>Explore.</span></h1><p>Discover experiences, meet new friends, and bring your imagination to life on Kyntric Games.</p><div className="hero-buttons"><Link to="/discover" className="button button-primary"><Compass size={17}/> Explore games</Link><Link to="/studio" className="button button-outline"><Plus size={17}/> Start creating</Link></div></div>
      <div className="hero-visual"><div className="orb orb-one"/><div className="orb orb-two"/><div className="floating-cube cube-one"/><div className="floating-cube cube-two"/><div className="hero-platform"><span>K</span></div></div>
    </section>
    <section className="section"><div className="section-heading"><div><div className="eyebrow">HAND-PICKED FOR YOU</div><h2>Featured experiences</h2></div><Link to="/discover" className="text-link">View all <ChevronRight size={16}/></Link></div><div className="game-grid">{games.slice(0,3).map(g=><GameCard key={g.id} game={g}/>)}</div></section>
    <section className="section"><div className="section-heading"><div><div className="eyebrow">JUMP RIGHT IN</div><h2>Popular right now</h2></div><Link to="/games" className="text-link">Browse games <ChevronRight size={16}/></Link></div><div className="game-grid">{games.map(g=><GameCard key={g.id} game={g}/>)}</div></section>
  </main>;
}

function Discover() {
  return <main className="page"><div className="page-title"><div className="eyebrow">FIND YOUR NEXT FAVORITE</div><h1>Discover</h1><p>Explore worlds made for every kind of player.</p></div><div className="game-grid">{games.map(g=><GameCard key={g.id} game={g}/>)}</div></main>;
}
function GamesPage() {
  return <main className="page"><div className="page-title"><div className="eyebrow">THE EXPERIENCE LIBRARY</div><h1>All games</h1><p>Browse the growing Kyntric Games universe.</p></div><div className="game-grid">{games.map(g=><GameCard key={g.id} game={g}/>)}</div></main>;
}
function Profile() {
  const {userId} = useParams();
  return <main className="page"><div className="profile-banner"/><div className="profile-head"><div className="profile-avatar">{(userId||"K").slice(0,1).toUpperCase()}</div><div><h1>{userId}</h1><p className="muted">Kyntric player · Profile preview</p><span className="tag">Player ID: {userId}</span></div><button className="button button-muted">Add friend</button></div><section className="section"><h2>About</h2><div className="empty-panel">This player's profile is just getting started.</div></section></main>;
}
function GameDetails() {
  const {gameId} = useParams();
  const game = games.find(g=>g.id===gameId);
  if(!game) return <main className="page"><h1>Game not found</h1><Link to="/discover" className="text-link">Back to Discover</Link></main>;
  return <main className="page"><div className="game-detail-art" style={{background:game.color}}><div className="game-art-title">{game.title}</div></div><div className="game-detail-head"><div><div className="eyebrow">{game.genre.toUpperCase()} EXPERIENCE</div><h1>{game.title}</h1><p>{game.description}</p></div><Link to={`/play/${game.id}`} className="button button-primary"><Play size={18} fill="currentColor"/> Play</Link></div><div className="empty-panel"><Star size={18}/> Game details and player stats will appear here.</div></main>;
}
function Placeholder({title}: {title:string}) { return <main className="page page-title"><div className="eyebrow">KYNTRIC GAMES</div><h1>{title}</h1><p>This page is part of the platform roadmap.</p></main>; }

export default function App() {
  return <div className="app-shell"><Sidebar/><div className="main-column"><Header/><Routes>
    <Route path="/" element={<Home/>}/><Route path="/discover" element={<Discover/>}/><Route path="/games" element={<GamesPage/>}/><Route path="/games/:gameId" element={<GameDetails/>}/><Route path="/play/:gameId" element={<Placeholder title="Game launcher"/>}/><Route path="/:userId/profile" element={<Profile/>}/><Route path="/friends" element={<Placeholder title="Friends"/>}/><Route path="/settings" element={<Placeholder title="Settings"/>}/><Route path="/studio" element={<Placeholder title="Create with KG-Studio"/>}/><Route path="*" element={<Placeholder title="Page not found"/>}/>
  </Routes><footer className="footer">© 2026 Kyntric Games <span>Built for players and creators.</span></footer></div></div>;
}
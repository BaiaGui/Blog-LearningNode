import searchIcon from './assets/SearchIcon.svg';
import './App.css'

function App() {


  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center radialBg">
    <NavBar/>
    <h1 className='text-stone-300 font-bold text-5xl my-12'>BLOG</h1>
    <SearchBarComponent/>
    <div className='blogGrid px-24'>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    <CardPost/>
    </div>
    
    </div>
  )
}

export default App


function NavBar(){
  return (
    <header className="w-full flex justify-between text-stone-300 px-6 py-3 border-b border-stone-500">
      <p className="font-bold">GUI.BAIA</p>
      <ul className="flex gap-5">
        <li><a href="" className="hover:text-slate-200">Posts</a></li>
        <li><a href="" className="hover:text-slate-200">+ New Post</a></li>
      </ul>
    </header>
  );
}

function CardPost({postTitle, postTag}){
  return (
    <button className="bg-neutral-800 w-full border-stone-500 rounded-md text-stone-300 text-left hover:bg-neutral-700 transition-all overflow-hidden">
        <img src="https://marketplace.canva.com/EAFB2eB7C3o/1/0/1600w/canva-yellow-and-turquoise-vintage-rainbow-desktop-wallpaper-Y4mYj0d-9S8.jpg" alt="" />
        <div className="px-4 py-2">
          <p className="flex text-lg font-bold">Esse é o título do post{postTitle}</p>
          <p className="text-xs">Tag do post {postTag}</p>
        </div>
    </button>
  );
}

function SearchBarComponent(){
  return (
    <div className='flex w-4/5 md:w-2/5 flex-initial mb-12 bg-neutral-900 rounded-full pl-4 border border-stone-500'>
      <img src={searchIcon} className="text-white iconColor" alt="" />
      <input type="text" name="searchBar" id="searchbar" placeholder="Pesquisar..." className="w-full bg-neutral-900 rounded-full h-10 text-stone-300 px-5 outline-none "/>
    </div>
    
  );
}
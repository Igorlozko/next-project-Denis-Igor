import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from '@/pages/store/globalContext'
import { useRouter } from 'next/router'
import HamMenuContent from './HamMenu/HamMenuContent'
import HamMenu from './HamMenu/HamMenu'
import About from '@/pages/about/About'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({ cmd: 'hideHamMenu', newVal: false })
  }

  const contents = []
  globalCtx.theGlobalObject.books.forEach(element => {
    contents.push({title: element.title, webAddress: '/' + element.bookId})    
  });

  return (
    <header className={classes.header}>
      <HamMenuContent contents ={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <nav>
        <ul>
          <li>
            <Link href='/'>All Books</Link>
          </li>
          <li>
            <Link href='/new-book'>Add New Book</Link>
          </li>
          <li>
          <Link href='/about/About'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation

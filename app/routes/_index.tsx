import '~/globals.css'
import Tabs from '~/components/Tabs/Tabs'
import CodeEditor from '~/components/CodeEditor/CodeEditor'

export function Avatar({children}: {children: React.ReactNode}) {
  return(
    <div className='Avatar'>
      {children}
    </div>
  )
}

export default function Page() {
  return(
    <div>
    <h1>Welcome to the Home Page</h1>
    <Tabs/>
    <CodeEditor />
    </div>
  )
}
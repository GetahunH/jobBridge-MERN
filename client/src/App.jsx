import {Outlet,Route,Routes,Navigate,useLocation} from 'react-router-dom';
import { Navbar,Footer } from './components';
import FindJobs from './pages/FindJobs';
import Companies from './pages/Companies';
import About from './pages/About';
import AuthPage from './pages/Auth'; 
import UploadJob from './pages/UploadJob';
import JobDetail from './pages/JobDetail';
import CompanyProfile from './pages/CompanyProfile';
import UserProfile from './pages/UserProfile';
import { useSelector } from 'react-redux';

/**
 * Layout component for handling protected routes.
 * It checks if the user is authenticated and decides what to render.
 */
function Layout(){
  const {user} = useSelector((state) => state.user);
  const location = useLocation();
//  console.log(user);

  return user ? (
    <Outlet />
  ):(
    <Navigate to = 'user-auth' state={{from:location}} replace/>
  )
}

function App() {

  const {user} = useSelector((state) => state.user);

  return (
    <main className='bg-[#f7fdfd]'>
      {/* always shows at the top whetehr the user is logged in or not */}
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
        
        <Route path='/' element={<Navigate to='/find-jobs' replace={true}/>} />
        <Route path='/find-jobs' element={<FindJobs/>} />
        <Route path='/companies' element={<Companies/>} />
        <Route path={
           user?.user?.accountType === 'seeker'
           ?'/user-profile'
           :'/user-profile/:id'
        } 
        element={<UserProfile/>} />
        <Route path={'/company-profile'} element={<CompanyProfile/>} />
        <Route path={'/company-profile/:id'} element={<CompanyProfile/>} />
        <Route path={'/upload-job'} element={<UploadJob/>} />
        <Route path={'/job-detail/:id'} element={<JobDetail/>} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      { user && <Footer />}
    </main>
  )
}

export default App

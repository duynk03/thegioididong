import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               {publicRoutes.map((route, index) => {
                  let Layout = MainLayout;
                  if (route.layout === null) {
                     Layout = Fragment;
                  } else if (route.layout) {
                     Layout = route.layout;
                  }
                  const Page = route.component;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </Router>
      </div>
   );
}

export default App;

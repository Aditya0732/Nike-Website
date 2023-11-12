// AppRouter.js
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PopularProducts } from './sections';
import ProductDescription from './ProductDescription';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={PopularProducts} />
        <Route path="/product/:id" component={ProductDescription} />
      </div>
    </Router>
  );
};

export default AppRouter;

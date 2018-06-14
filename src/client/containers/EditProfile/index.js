import { withRouter } from 'react-router-dom';
import CreateProfile from './component';
import enhance from './container';

export default enhance(withRouter(CreateProfile));
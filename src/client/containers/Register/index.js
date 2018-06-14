import { withRouter } from 'react-router-dom';
import Register from './component';
import enhance from './container';

export default enhance(withRouter(Register));
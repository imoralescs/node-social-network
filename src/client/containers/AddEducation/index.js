import { withRouter } from 'react-router-dom';
import AddEducation from './component';
import enhance from './container';

export default enhance(withRouter(AddEducation));
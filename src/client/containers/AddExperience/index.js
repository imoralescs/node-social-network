import { withRouter } from 'react-router-dom';
import AddExperience from './component';
import enhance from './container';

export default enhance(withRouter(AddExperience));
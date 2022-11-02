import { Button } from "./Button.styled";
import PropTypes from 'prop-types'; 


export const ButtonLoadMore = ({onClick}) => 
<Button type="button" onClick={onClick}>
  Loade more
    </Button>
    ButtonLoadMore.propTypes = {
      onClick: PropTypes.func.isRequired,
        }

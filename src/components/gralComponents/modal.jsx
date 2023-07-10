import ReactModal from 'react-modal';
import { PropTypes } from 'prop-types';
import { customStyles,ContainerButtonModal } from './modalStyles';
// import styled from 'styled-components';

ReactModal.setAppElement('#root');

const ModalApp = ({ isOpen, onRequestClose, handleClickModal, text, textBtn, children}) => {

return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="ModalApp"
      style={customStyles}
    >
      <h1>{text}</h1>
      {textBtn !== 'Borrar' && children}
      <ContainerButtonModal>
        {textBtn === 'Borrar' && <button className='btn-accept' onClick={handleClickModal}>{textBtn}</button>} 
        <button className= 'btn-cancel' onClick={onRequestClose}>Cancelar</button>
      </ContainerButtonModal>
    </ReactModal>
  );
};

// ModalApp.propTypes = {
//     isOpen: PropTypes.boolean,
//     onRequestClose: PropTypes.number,
//     children: PropTypes.func,
//     handleClickModal: PropTypes.func,
//     text: PropTypes.str,
//     textBtn: PropTypes.str
//   }
export default ModalApp;
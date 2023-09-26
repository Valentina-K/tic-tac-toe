import styled, { css } from 'styled-components';
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(33, 33, 33, 0.12);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  z-index: 99;

  ${props =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const ModalWindow = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '1rem',
  borderRadius: '15px',
  transform: 'translate(-50%, -50%) scale(1)',
  boxShadow: '0px 22px 40px 0px rgba(0, 0, 0, 0.1)',
  maxWidth: '50rem',
  width: '90%',
  background:
    'linear-gradient(127deg, rgba(255,255,255,1) 0%, rgba(234,172,231,1) 50%, rgba(255,0,241,0.6811099439775911) 100%)',
  transition: 'transform 350ms cubic-bezier(0.4, 0, 0.2, 1)',
});

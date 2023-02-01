import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  background: linear-gradient(45deg,#04845c, #0cc48c);
  padding: 0 16px;

  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;

      color: #c7d1d8;
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      &.active {
        border-bottom: 2px solid #fff;
      }
    }

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  height: 24px;
  width: 24px;
  color: #fff;
  border-radius: 4px;
  flex-shrink: 0;

  margin-left: 17px;
`;

export const SearchInput = styled.input`
  margin-left: 16px;
  width: 100%;

  background:#c7d1d8;
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background: #fff;
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #c7d1d8;
  flex-shrink: 0;
`;


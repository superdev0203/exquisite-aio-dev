import css from 'styled-jsx/css';

const HomePageStyles =  css`
.homepage {
  padding-bottom: 80px;
  background-color: var(--black);
  border-bottom: 1px solid var(--mercury);

  &__heading {
    margin: 30px 0 15px;
    color: var(--white);
    font-size: 32px;
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }

  &__paragraph {
    margin-bottom: 30px;
    color: var(--white);
    font-family: "IBM Plex Sans";
    font-size: 18px;
    opacity: 0.5;
  }

  &__button {
    padding: 10px 20px;
    color: var(--white);
    opacity: 0.75;
    border: 1px solid rgba(white, 0.5);
    text-align: center;

    &:hover {
      opacity: 1;
      border: 1px solid white;
    }
  }

  &__video {
    display: inline-block;
    height: 340px;

    @media (min-width: 992px) {
      padding-top: 30px;
      padding-bottom: 30px;
      height: calc(100vh - 200px);
    }
  }
}
`
export default HomePageStyles
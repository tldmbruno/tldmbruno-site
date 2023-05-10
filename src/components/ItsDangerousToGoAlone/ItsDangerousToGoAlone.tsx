import style from './ItsDangerousToGoAlone.module.css';

function ItsDangerousToGoAlone() {
  return (
    <>
      <h1 className={style.oldManSpeech}>IT'S DANGEROUS TO GO ALONE. TAKE THIS.</h1>
      <a href='https://thelastdarkmage.itch.io/'>
        <img className={style.floatingSword} src={'sword.png'}/>
      </a>
      <p>
        <code>SITE UNDER CONSTRUCTION | @tldmbruno on GitHub | @thelastdarkmage on itch.io</code>
      </p>
    </>
  );
}

export default ItsDangerousToGoAlone;
import style from './ItsDangerousToGoAlone.module.css';

function ItsDangerousToGoAlone() {
  return (
    <>
      <h1 className={style.oldManSpeech}>IT'S DANGEROUS TO GO ALONE. TAKE THIS.</h1>
      <img className={style.floatingSword} src={'sword.png'} />
      <p>
        <code>@tldmbruno on GitHub</code>
      </p>
    </>
  );
}

export default ItsDangerousToGoAlone;
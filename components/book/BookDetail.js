import classes from './BookDetail.module.css';

function BookDetail(props) {
  return (
    <section className={classes.detail}>
      <div className={classes.bookDetails}>
      <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#800000' }}>
            {props.title}
        </div>
        <div className={classes.imageDiv}>
          <img src={props.poster} alt={props.title} />
        </div>
        <div className={classes.textDiv}>
          <h2>{props.author}</h2>
          <h2 style={{ marginBottom: '1em' }}>{props.releaseDate}</h2>
          <a href={props.reviewLink} className={classes.reviewLink}>
            <div style={{ border: '2px solid #ffcccc', backgroundColor: '#ffe6e6', padding: '1em', borderRadius: '8px', display: 'inline-block', paddingTop: '0.5em' }}>
                Review on Youtube!
            </div>
            </a>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;
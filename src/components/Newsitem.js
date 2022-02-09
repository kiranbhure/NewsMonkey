import React from 'react'

const Newsitem = (props) => {
  let {title, discription, imageUrl, newsUrl, author, date, source} = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger"> {source}</span>
        </div>
        <img src={!imageUrl?"https://images.yourstory.com/cs/2/a9efa9c02dd911e9adc52d913c55075e/RajanNavani-1643820624666.jpeg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <p className="card-text"> <b><small className="card-muted"> By {!author?"Unknown":author} on {new Date(date).toLocaleString()} </small></b></p>
          <a rel="noreferrer" href={newsUrl} target="/blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem

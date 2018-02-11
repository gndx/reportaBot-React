import React, { Component } from 'react';

class HowTo extends Component {
  render() {
    return(
      <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <p>Estadistidas:</p>
            <h2>Reporte Ciudadano</h2>
            <br/><br/>
          </div>
          <div className="col-sm-6">
            <h4>🐶 3 🚧 3 💡 2 🚦 20</h4>
          </div>
          <div className="col-sm-12">
          <h3>¿Comó Reportar una Incidencia?</h3>
          <p>Nuestro BOT trabaja las 24/7/365 para dar de alta reportes y en un maximo de 24 horas recibiras respuesta del estado del mismo</p>
          <br/>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="http://s3.amazonaws.com/chewiekie/img/search-reportaBot.jpg" width="100%" alt=""/>
              <br/>
              <div className="content">
                <div className="head">
                  <div className="htitle">
                    <h3>Buscanos en Messenger</h3>
                  </div>
                  <p>En Facebook Buscanos como: <a href="https://m.me/reportabot">ReportaBOT</a> e Inicia una conversacion para reportar tu incidencia.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="http://s3.amazonaws.com/chewiekie/img/location-reportaBot.jpg" width="100%" alt="" />
              <div className="content">
                <div className="head">
                  <div className="htitle">
                    <h3>Elije el Tipo de Incidencia</h3>
                  </div>
                  <p>Puedes reportar las principales eventualidades en tu ciudad, Baches, Iluminarias, animales muertos etc.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="http://s3.amazonaws.com/chewiekie/img/report-reportaBot.jpg" width="100%" alt="" />
              <div className="content">
                <div className="head">
                  <div className="htitle">
                    <h3>Proporciona la Ubicacion</h3>
                  </div>
                  <p>Solo tienes que proporcionarnos la ubicacion y el reporte sera creado y un asesor le dara seguimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    )
  }
}

export default HowTo;
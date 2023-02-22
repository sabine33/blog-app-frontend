import React from "react";
import "./SingleArticle.css";
function SingleArticle() {
  return (
    <div className="container article">
      <div className="row">
        <div className="col-12 d-flex flex-column gap-5">
          <div className="article__title display-4">
            How ASML became Europe’s most valuable tech firm
          </div>
          <div className="article__thumbnail">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/775F/production/_128695503_asml_aerial_campus_veldhoven_aug2021_0006.jpg"
              className="thumbnail"
            />
          </div>
          <div className="article__content text-start">
            <p>
              From the outside it looks like an ordinary corporate building,
              lots of glass and steel, but this factory in the south of the
              Netherlands belongs to ASML, and the machines made there are
              anything but ordinary.
            </p>
            <p>
              This effective monopoly means that exactly how ASML's machines
              work is subject to some of the most stringent corporate security
              in the world. Nevertheless, we were given a tour of its plant, and
              were guided through the basics.
            </p>
            <p>
              Image source, ASML Image caption, This illustration shows the
              complex interior of an ASML EUV machine - the extreme ultraviolet
              light is in purple Microchips are made by building up complex
              patterns of transistors, or miniature electrical switches, layer
              by layer, on a silicon wafer.
            </p>
            <p>
              Image source, ASML Image caption, This illustration shows the
              complex interior of an ASML EUV machine - the extreme ultraviolet
              light is in purple Microchips are made by building up complex
              patterns of transistors, or miniature electrical switches, layer
              by layer, on a silicon wafer.
            </p>
          </div>
          <div className="article__footer">
            <a href="#">SHARE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;

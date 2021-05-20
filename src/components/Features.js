import { useContext } from "react";
import { map } from "lodash";
import { DataHomeContext } from "../context/DataHomeProvider";

import "./Features.sass";

const Features = () => {

  const { features } = useContext(DataHomeContext);

  return (
    <div className="container-timeline" id="features">
      <div className="timeline">
        <ul>
          {map(features, (feature) => (
            <li key={feature.id}>
              <div className="timeline-content">
                <h3 className="date">{feature.technologyes}</h3>
                <h1>{feature.title}</h1>
                <p>
                  {feature.summary}
                </p>
                <a href={feature.url} className="url-btn" target="_blank" rel="noreferrer">View Code</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;

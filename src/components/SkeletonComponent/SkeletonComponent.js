import { render } from "react-dom";
import { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import '../SkeletonComponent/SkeletonComponent.css'
class SkeletonComponent extends Component{

 render(){
return (
  <SkeletonTheme color="#FFFFFF" highlightColor="#D3D3D3" style={{float:'right'}}>
    <section>
      

        <ul className="list">
          {Array(3)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                {/* <Skeleton circle={true} height={50} width={50} />   */}
                <p></p>
                 <p><Skeleton height={36} width={`100%`} /></p> 
                </h4>
                <p className="card-channel">
                  <Skeleton width={`100%`} />
                </p>
                <h4>
                  <Skeleton width={`40%`} />
                  <Skeleton style={{float:'right'}} width={`20%`} />
                </h4>
              </li>
            ))}
        </ul>
      </section>
  </SkeletonTheme>
);
}
}

export default SkeletonComponent;
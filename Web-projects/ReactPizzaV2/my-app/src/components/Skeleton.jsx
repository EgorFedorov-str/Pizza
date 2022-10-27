import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="149" r="120" /> 
    <rect x="0" y="295" rx="10" ry="10" width="280" height="27" /> 
    <rect x="0" y="326" rx="16" ry="16" width="280" height="67" /> 
    <rect x="0" y="397" rx="11" ry="11" width="280" height="36" />
  </ContentLoader>
)

export default Skeleton
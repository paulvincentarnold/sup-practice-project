/* Export the LakesInformation component (Which takes an image, title and description) from the Data.js file so it can be displayed in the root file (App.jsx) */
export default function LakesInformation({image, title, description}) {
    return(<li>
      <img src={image} alt={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>);
  }
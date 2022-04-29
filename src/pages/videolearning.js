// import React from "react";

// import Banner from "../components/Global/Banner";
// import Button from "../components/Global/Button";

// import Card from "../components/Global/Card";

// import letter from "../images/learn/letter.webp";

// import brain from "../images/learn/brain.webp";

// import families from "../images/learn/families.webp";

// import roundtable from "../images/learn/roundtable.webp";

// import video from "../images/learn/video.webp";

// import * as CardContainerStyles from "../styles/Containers/CardContainer.module.css";

// import * as globalStyles from "../styles/Global/Global.module.css";

// import * as styles from "../styles/pages/Learn.module.css";

// import useWindowDimensions from "../utils/hooks/useWindowDimensions";

// import DonateOrVolunteer from "../components/Global/DonateOrVolunteer";

// import { navigate } from "gatsby";

// import styled from "styled-components";

// export default function Learn() {
//   const { width } = useWindowDimensions();

//   const determineCardDirection = () => {
//     return width <= 700 ? "vertical" : "horizontal";
//   };

//   return (
//     <div>
//       <Banner color="white" backgroundColor="darkblue" height={"20vh"}>
//         <h1>LEARN MORE</h1>
//         <p>
//           BY developing a holistic understanding of poverty, you begin to change
//           the world.
//         </p>
//       </Banner>

//       <div className={globalStyles.genericContainer}>
//         <div className={CardContainerStyles.container}>

//           <Card circle={true} imageWidth={width >= 700 ? '50%' : '100%'} image={letter} direction={determineCardDirection()}>
//             <CardContent className={styles.cardContent}>
//               <h1>Congregational Info</h1>
//               <p>
//                 If you or someone you know is interested in getting their church
//                 or congregation involved, contact Shawn Ewart:
//               </p>
//               <h4>Phone: (509) - 724 - 7299</h4>
//               <div className={styles.cardContentButtons}>
//                 <Button onClick={() => window.open('mailto:sewart@familypromiseofspokane.org', '_blank')} color={'gold'}>Send Shawn An Email</Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       <DonateOrVolunteer />
//     </div>
//   );
// }

// const CardContent = styled.div`

// font-size: larger;

// display: flex;
// flex-direction: column;
// justify-content: start;
// align-items: center;

// color: ${props => props.theme.darkblue};

// @media (max-width: 1200px) {
//     .cardContent {
//       font-size: smaller;
//     }
  
//   }
  
//   @media (max-width: 900px) {
//     .cardContent {
//       font-size: smaller;
//     }
//   }
  
//   @media (max-width: 600px) {
//     .cardContentButtons {
//       flex-direction: column;
//     }
//   }
// `
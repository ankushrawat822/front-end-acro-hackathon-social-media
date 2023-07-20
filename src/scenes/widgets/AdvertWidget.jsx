// import { Typography, useTheme } from "@mui/material";
// import FlexBetween from "components/FlexBetween";
// import WidgetWrapper from "components/WidgetWrapper";
// import Chatbot

// const AdvertWidget = () => {
//   const { palette } = useTheme();
//   const dark = palette.neutral.dark;
//   const main = palette.neutral.main;
//   const medium = palette.neutral.medium;

//   return (
//     <WidgetWrapper>
    
//      <h3>Chat</h3>
//      {/* messages */}
//       <div>
//       <section class="chat__section">
//         <div class="brand">
//             <img height="40" src="/wassup.png" alt=""/>
//             <h1>Wassup</h1>
//         </div>
//         <div class="message__area">
//           <p>hello</p>
//         </div>
//         <div>
//             <textarea id="textarea" cols="30" rows="1" placeholder="Write a message..."></textarea>
//         </div>
//     </section>
//       </div>
//     </WidgetWrapper>
//   );
// };

// export default AdvertWidget;
import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import Chatbot from 'react-simple-chatbot';

const AdvertWidget = () => {
  // const { palette } = useTheme();
  // const dark = palette.neutral.dark;
  // const main = palette.neutral.main;
  // const medium = palette.neutral.medium;
    const steps=[
      {
        id:'Greet',
        message: 'Hello! ,from Team Code-GpT',
        trigger: 'Ask name'

      },
      {
        id:'Ask name',
        message: 'Please enter your name',
        trigger: 'waiting',
      },
      {
        id:'waiting',
        user: true,
        trigger: 'Name',
      },
      {
        id: 'Name',
        message:'Hi,{previousValue}, How is your mood today?',
        trigger:"moods",
      },
      {
        id: "moods",
        options: [{ value:"Happy",label: "Happy",trigger: "Happy"},
        { value:"Sad",label: "Sad",trigger: "Sad"},
      ],
      },
      {
        id:'Happy',
        message: 'Your happiness is contagious, and it brightens up every room you enter,so Keep smiling!',
        end:true,
      },
      {
        id:'Sad',
        message: 'Every day is a fresh start, a chance to turn your sorrows into joy and your tears into laughter',
        end:true,
      },
    ];
    

  return (
    <WidgetWrapper>
      <FlexBetween>
         <Chatbot steps={steps} />
        {/* <Typography color={dark} variant="h5" fontWeight="500">
          Hi
        </Typography>
        <Typography color={medium}>Chatbot</Typography> */}
      </FlexBetween>
     
      {/* <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween> */}
      {/* <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty and made sure your skin
        is exfoliating skin and shining like light.
      </Typography> */}
    </WidgetWrapper>
  );
}

export default AdvertWidget;
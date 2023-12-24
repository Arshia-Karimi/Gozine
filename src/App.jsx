import GozineBox from "./components/GozineBox";

const styles = [
  {
    button: "what is html",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi neque perspiciatis temporibus tempore beatae, aut magni sapiente, asperiores quo vel commodi autem aliquam animi consectetur, nesciunt minus nihil! Voluptatem, quos.",
  },
  {
    button: "what is css",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi neque perspiciatis temporibus tempore beatae, aut magni sapiente, asperiores quo vel commodi autem aliquam animi consectetur, nesciunt minus nihil! Voluptatem, quos.",
  },
  {
    button: "what is js",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi neque perspiciatis temporibus tempore beatae, aut magni sapiente, asperiores quo vel commodi autem aliquam animi consectetur, nesciunt minus nihil! Voluptatem, quos.",
  },
  {
    button: "what is php",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi neque perspiciatis temporibus tempore beatae, aut magni sapiente, asperiores quo vel commodi autem aliquam animi consectetur, nesciunt minus nihil! Voluptatem, quos.",
  },
];

const App = () => {
  return (
    <div>
      {styles.map((item, index) => {
        return <GozineBox button={item.button} text={item.text} key={index} />;
      })}
    </div>
  );
};

export default App;

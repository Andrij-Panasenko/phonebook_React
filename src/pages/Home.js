import { Helmet } from 'react-helmet';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default function Home() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Welcome page ✌</title>
      </Helmet>
      <img
        src="https://t3.ftcdn.net/jpg/04/55/59/32/360_F_455593262_z8FumgXN7OkDnAZEwHpWyB83TXz51fxl.jpg"
        alt="weclome img"
      />
    </div>
  );
}

import styles from "./App.css";
import { useEffect, useState } from "react";

const soh = ({ children }) => {
  return <span className="soh">{children}</span>;
};

const platforms = {
  // Dollars Per GB per hour
  netflix: {
    storage: 0.021,
    bandwidth: 0.05,
    compute: 0.1,
    usage: 7,
    multiplier: 0.3,
  },
  instagram: {
    storage: 0.021,
    bandwidth: 0.12,
    compute: 0.23,
    usage: 0.6,
    multiplier: 0.1,
  },
  youtube: {
    storage: 0.02,
    bandwidth: 0.008,
    compute: 0.7,
    usage: 2,
    multiplier: 0.3,
  },
  tiktok: {
    storage: 0.021,
    bandwidth: 0.08,
    compute: 0.2,
    usage: 17,
    multiplier: 0.7,
  },
};

const calculateCost = (result, platform) => {
  if (!result || !platform) return "";
  const platformInfo = platforms[platform];
  const storageCost = platformInfo.storage * result * platformInfo.usage;
  const bandwidthCost = platformInfo.bandwidth * result * platformInfo.usage;
  const computeCost = platformInfo.compute * result * platformInfo.usage;
  const totalCost = storageCost + bandwidthCost + computeCost;
  return (totalCost * platformInfo.multiplier).toFixed(2);
};

function App() {
  const [hours, setHours] = useState("");
  const [result, setResult] = useState("");
  const [platform, setPlatform] = useState("");

  useEffect(() => {
    const totalCost = calculateCost(hours, platform);
    setResult(totalCost);
  }, [hours, platform]);

  return (
    <div className="body">
      <header className="header">
        <div className="titleblock">
          <h2 className="wiy">What is your</h2>
          <h1 className="cost">Cost?</h1>
        </div>
        <div className="subtitleblock">
          <p className="subtitle">
            Running a social media platform is expensive. Using a social media
            platform is free.{" "}
            <span className="light">we aren't the customers. we are the </span>
            <span className="orange">product</span>
          </p>
        </div>
      </header>
      <div>
        <div className="inputRow">
          <div className="inputBlock">
            <input
              className="input"
              type="number"
              placeholder="Enter your screen time"
              onInput={(e) => setHours(e.target.value)}
            />
          </div>
          <div className="inputBlock">
            <select
              className="input"
              style={{ paddingTop: 9, paddingBottom: 9 }}
              onInput={(e) => setPlatform(e.target.value)}
            >
              <option value="select">select</option>
              <option value="tiktok">TikTok</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="netflix">Netflix</option>
            </select>
          </div>
        </div>
        <div className={result === "" ? "result" : "result altered"}>
          <h1>{result === "" ? "$___" : `$${result}`}</h1>
        </div>
      </div>
      <div className="notes">
        <p className="note">
          use your phone's "screen time" feature to learn how much time you
          spend on an app. Enter the number of hours above, then select the
          platform from the dropdown. It will break your watch time into a
          number of posts watched, then evaluate the average post length and
          size, then add up bandwidth, storage, and other costs.
        </p>
        <h3 className="title">How to use</h3>
      </div>
      <div className="notes">
        <p className="note">
          Running a social media platform is extremely expensive, and we are
          playing into their motives. Social media companies are for-profit
          companies, so in order to justify their product, they have to make
          money on it. The bottom line is for business to work, a company must
          make money on you, so your data has a higher price tag than the cost
          of serving you. The widespread use and addiction to social media is
          not only destroying our collective mental health but is helping
          aloready huge corporations grow at the cost of our privacy and rights,
          without us even knowing
        </p>
        <h3 className="title">Why you should care</h3>
      </div>
      <div className="notes">
        <p className="note">
          I have researched tech stacks and costs for the major social media
          companies, and have broken that down into an hourly rate. A breakdown
          of my specific process will show with the calculation
        </p>
        <h3 className="title">How it works</h3>
      </div>
      <div className="notes">
        <p className="note">
          Most of the data in this app is based on leaks, expert opinions, and
          industry trends. It is important to understand that, while based in
          sound numbers from reliable source, these numbers will not reflect a
          perfect cost as huge companies are able to develop technologies to
          reduce their costs and to negotiate better deals. Numbers on Netflix
          are pretty accurate as many are sourced directly from their
          engineering blog, whereas other platforms like TikTok are extremely
          secretive about their costs so assumptions must be made by looking at
          pricing for their providers.
        </p>
        <h3 className="title">A note on error</h3>
      </div>
      <div className="notes">
        <h3 className="title">Citations</h3>
        <p className="note">
          Netflix Tech Blog [https://netflixtechblog.com/], Wired Magazine
          [https://www.wired.com/story/youtube-slashes-video-quality-save-bandwidth/]
        </p>
      </div>
    </div>
  );
}

export default App;

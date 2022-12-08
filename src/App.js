import { useEffect, useState } from "react";
import styles from "./App.css"; // Not actually unused; DO NOT REMOVE

const As = ({ children }) => {
  return (
    <a className="link" href={children}>
      {children}
    </a>
  );
};

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
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
  console.log({ result, platform });
  if (!result || !platform || platform === "select") return "";
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

  const scrollPosition = useScrollPosition();

  return (
    <div className="body">
      <style>
        {`
          :root {
            --scroll: ${scrollPosition};
          }
        `}
      </style>
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
        <div className="result">
          <h1>{result !== "" ? `${platform} spent ` : ""}</h1>
          <div className={result === "" ? "_result" : "_result altered"}>
            <h1>{result === "" ? "$___" : `$${result}`}</h1>
          </div>
          <h1>{result !== "" ? ` on you` : ""}</h1>
        </div>
      </div>
      <div className="notes" onClick={() => {}}>
        <p className="note">
          use your phone's "screen time" feature to learn how much time you
          spend on an app. Enter the number of hours above, then select the
          platform from the dropdown. It will break your watch time into a
          number of posts watched, then evaluate the average post length and
          size, then add up bandwidth, storage, and other costs.
        </p>
        <h3 className="title">How to use</h3>
      </div>
      <div className="notes" onClick={() => {}}>
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
      <div className="notes" onClick={() => {}}>
        <p className="note">
          It is remarkably well documented that the huge use of social media has
          a massive impact on our mental health. Our huge connection to social
          media has both positives and negatives, mentally, socially, and
          technologically. I write about the social and technological impacts in
          my essay linked in the footer, but it is critical to not underestimate
          the impacts on your mental health and social stability.
        </p>
        <h3 className="title">Media & mental health</h3>
      </div>
      <div className="notes" onClick={() => {}}>
        <p className="note">
          I have researched tech stacks and costs for the major social media
          companies, and have broken that down into an hourly rate. A breakdown
          of my specific process will show with the calculation
        </p>
        <h3 className="title">How it works</h3>
      </div>
      <div className="notes" onClick={() => {}}>
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
      <div className="notes" onClick={() => {}}>
        <h3 className="title">Citations</h3>
        <p className="note">
          Netflix Tech Blog [<As>https://netflixtechblog.com/</As>], Wired
          Magazine [
          <As>
            https://www.wired.com/story/youtube-slashes-video-quality-save-bandwidth/
          </As>
          ], Levels [<As>https://levels.fyi</As>], TikTok Engineering Blog [
          <As>https://careers.tiktok.com/blog</As>], Financial Post [
          <As>
            https://financialpost.com/technology/how-much-does-bandwidth-actually-cost
          </As>
          ], Google Blog [
          <As>
            https://blog.google/inside-google/company-announcements/investing-america-2022
          </As>
          ], Creator Kit [
          <As>https://creatorkit.com/blog/video-length-guide/</As>]
        </p>
      </div>
      <hr />
      <div className="notes">
        <p className="note">
          An app built by{" "}
          <a className="link" href="https://jackcrane.rocks">
            Jack Crane
          </a>{" "}
          for Dr. Rayner's ENG 1900 class at Saint Louis University. Data and{" "}
          <a className="link" href="https://github.com/jackcrane/media">
            source code
          </a>{" "}
          are under a GNU GPL v3 license. Read the accompanying{" "}
          <a
            className="link"
            href="https://docs.google.com/document/d/1t0kK5mdKNxpc8d8GmIhqrbKZSNRIyP0BCIk_7EJsa1Q/edit?usp=sharing"
            target="_blank"
          >
            paper
          </a>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
}

export default App;

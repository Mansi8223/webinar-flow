import { useState, useEffect, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "./Components/Toasters";
// component imports
import Base from "./Base/Base";
import Header from "./Layout/Header";
import Dropdown from "./Components/Dropdown";
import Card from "./Components/Card";
// style imports
import "./styles/gap.css";
import "./styles/global.css";
import "./styles/structure.css";
import "./styles/typography.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); // For displaying data
  const [originalData, setOriginalData] = useState([]); // Complete data source
  const [topicArr, setTopicArr] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("All");

  const getDefaultData = async () => {
    // Fetch default data from JSON for initial UI presentation
    fetch("/webinars.json")
      .then((response) => response.json())
      .then((webinars) => {
        setOriginalData(webinars); // Store the original data
        setData(webinars); // Set initial data to display
        let topics = webinars.map((item) => item.topic);
        setTopicArr(["All", ...new Set(topics)]); // Use Set to avoid duplicates
      })
      .catch((error) => {
        toastError("Error fetching the webinars:", error);
      });
  };

  useEffect(() => {
    getDefaultData();
  }, []);

  const searchTermHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchByTopicHandler = (topic) => {
    setSelectedTopic(topic);
    if (topic === "All") {
      setData(originalData); // Show all webinars
    } else {
      const filteredData = originalData.filter((val) => val.topic === topic);
      setData(filteredData);
    }
  };

  const topicValidator = (topicToCheck, webinars) => {
    const topicExists = webinars.some(
      (webinar) => webinar.topic === topicToCheck
    );
    return topicExists;
  };

  const addHandler = (newObj) => {
    // Adding new entry in the existing data
    const updatedData = [newObj, ...data];
    setData(updatedData); // Update the data to display
    setOriginalData([newObj, ...originalData]); // Update the original data

    // Adding new topic in topic dropdown if it doesn't exist
    if (!topicArr.includes(newObj?.topic)) {
      const tempTopics = [...topicArr, newObj?.topic];
      setTopicArr([...new Set(tempTopics)]); // Use Set to avoid duplicates
    }

    toastSuccess("Webinar added");
  };

  const editHandler = (index, updatedObj) => {
    // Update the data at the specific index
    const updatedData = [...data];
    updatedData[index] = updatedObj;

    // Update the state with the new data
    setData(updatedData);
    setOriginalData(updatedData);

    // Check if the new topic is already in the topic array
    if (!topicArr.includes(updatedObj.topic)) {
      // Add new topic to the dropdown array
      setTopicArr([...new Set([...topicArr, updatedObj.topic])]);
    }
  };

  const deleteHandler = (index, itemToDelete) => {
    //topic from entry to be deleted
    let deletedItemsTopic = itemToDelete.topic;

    // Update the data to display
    let arr = data.filter((_, i) => i !== index);
    setData(arr);

    // Update the original data
    let originalArr = originalData.filter((_, i) => i !== index);
    setOriginalData(originalArr);

    // Check if the new topic is already in the topic array
    let topicExists = topicValidator(deletedItemsTopic, originalArr);
    // remove topic from the dropdown array
    if (!topicExists) {
      const updatedTopics = topicArr.filter(
        (topic) => topic !== deletedItemsTopic
      );
      setTopicArr([...new Set(updatedTopics)]);
    }

    toastSuccess("Webinar deleted!");
  };
  return (
    <Fragment>
      <Base>
        <Header title="Webinars" addHandler={addHandler} />
        <div className="d-flex d-flex-column gap-5 pt-5 pb-5 pl-10 pr-10">
          <div className="d-flex d-justify-space-between">
            <div className="d-flex gap-3">
              <div className="d-flex d-align-center gap-2 pl-3 pr-3 pt-2 pb-2 bg-white border rounded-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.0259 13.8473L18.595 17.4157L17.4159 18.5948L13.8475 15.0257C12.5198 16.09 10.8684 16.6689 9.16669 16.6665C5.02669 16.6665 1.66669 13.3065 1.66669 9.1665C1.66669 5.0265 5.02669 1.6665 9.16669 1.6665C13.3067 1.6665 16.6667 5.0265 16.6667 9.1665C16.6691 10.8682 16.0902 12.5196 15.0259 13.8473ZM13.3542 13.229C14.4118 12.1414 15.0024 10.6835 15 9.1665C15 5.94317 12.3892 3.33317 9.16669 3.33317C5.94335 3.33317 3.33335 5.94317 3.33335 9.1665C3.33335 12.389 5.94335 14.9998 9.16669 14.9998C10.6837 15.0022 12.1416 14.4116 13.2292 13.354L13.3542 13.229Z"
                    fill="#716C6A"
                  />
                </svg>
                <input
                  className="bg-white border-none"
                  placeholder="Search for webinar"
                  type="text"
                  value={searchTerm}
                  onChange={searchTermHandler}
                />
              </div>
            </div>
            <div className="d-flex gap-3">
              <Dropdown
                title="Topic"
                arr={topicArr}
                handler={searchByTopicHandler}
                defaultValue={selectedTopic}
              />
            </div>
          </div>
          <div className="d-grid d-grid-frame-3 gap-6">
            {data
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val?.title
                    ?.toLowerCase()
                    ?.includes(searchTerm?.toLowerCase()) ||
                  val?.topic
                    .toLowerCase()
                    ?.includes(searchTerm?.toLowerCase()) ||
                  val?.instructorName
                    ?.toLowerCase()
                    ?.includes(searchTerm?.toLowerCase()) ||
                  val?.instructorRole
                    ?.toLowerCase()
                    ?.includes(searchTerm?.toLowerCase()) ||
                  val?.instructorCompany
                    ?.toLowerCase()
                    ?.includes(searchTerm?.toLowerCase())
                ) {
                  return val;
                }
                return null;
              })
              .map((item, index) => (
                <Card
                  item={item}
                  index={index}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}
                />
              ))}
          </div>
        </div>
      </Base>

      <ToastContainer />
    </Fragment>
  );
}

export default App;

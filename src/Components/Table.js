import React from "react";
import styles from "../styles/modularCSS/Table.module.css";
import WebinarRow from "./WebinarRow";
import { toastSuccess } from "./Toasters";

function Table({
  data,
  setData,
  originalData,
  setOriginalData,
  searchTerm,
  topicArr,
  setTopicArr,
}) {
  const topicValidator = (topicToCheck, webinars) => {
    const topicExists = webinars.some(
      (webinar) => webinar.topic === topicToCheck
    );
    return topicExists;
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

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr className="table-header bg-white">
            <th className={`${styles["title-column"]} pl-5`} align="left">
              Title
            </th>
            <th className={`${styles["description-column"]}`} align="left">
              Description
            </th>
            <th align="left">Topic</th>
            <th align="left">Date time</th>
            <th align="center" className="pr-5">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val?.title
                  ?.toLowerCase()
                  ?.includes(searchTerm?.toLowerCase()) ||
                val?.topic.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                val?.description
                  ?.toLowerCase()
                  ?.includes(searchTerm?.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((item, index) => (
              <WebinarRow
                key={index}
                item={item}
                index={index}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

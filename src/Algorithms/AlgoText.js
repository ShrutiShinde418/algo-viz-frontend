import React from "react";
import { Container } from "semantic-ui-react";
import "./Highlight.css";

const AlgoText = (props) => {
  if (props.algoOption == "bubble") {
    return (
      <Container>
        <h1 style={{ marginRight: "500px" }}> BubbleSort(array)</h1>
        <h2 style={{ marginRight: "400px" }}> for i=0 to N-2 </h2>
        <h2 style={{ marginRight: "300px" }}> for j=0 to N-2</h2>
        <h2 style={{ marginRight: "150px" }}> if array[i] {">"} array[i+1]</h2>
        <h2
          className={props.swapHigh ? "swap" : ""}
          style={{ marginRight: "85px" }}
        >
          swap(array[i], array[i+1])
        </h2>
        <h2 style={{ marginRight: "310px" }}> end if</h2>
        <h2 style={{ marginRight: "350px" }}>end for</h2>
        <h2 style={{ marginRight: "450px" }}>end for</h2>
      </Container>
    );
  } else if (props.algoOption == "select") {
    return (
      <Container>
        <h1 style={{ marginRight: "500px" }}> SelectionSort(array)</h1>
        <h2 style={{ marginRight: "400px" }}> for i=0 to N-1 </h2>
        <h2 style={{ marginRight: "350px" }}> Smallsub = I </h2>
        <h2 style={{ marginRight: "300px" }}> for j=I + 1 to N-1</h2>
        <h2 style={{ marginRight: "120px" }}>
          {" "}
          if array[j] {"<"} array[Smallsub]
        </h2>
        <h2 style={{ marginRight: "85px" }}>Smallsub = j</h2>
        <h2 style={{ marginRight: "330px" }}>end if</h2>
        <h2 style={{ marginRight: "350px" }}>end for</h2>
        <h2
          className={props.swapHigh ? "swap" : ""}
          style={{ marginRight: "180px" }}
        >
          swap(array[I], array[Smallsub])
        </h2>
        <h2 style={{ marginRight: "480px" }}>end for</h2>
      </Container>
    );
  } else if (props.algoOption == "insertion") {
    return (
      <Container>
        <h1 style={{ marginRight: "500px" }}> InsertionSort(array)</h1>
        <h2 style={{ marginRight: "400px" }}> for i=1 to N-1 </h2>
        <h2 style={{ marginRight: "350px" }}> j = i </h2>
        <h2 style={{ marginRight: "70px" }}>
          {" "}
          while(j{">"}0) and (array[j]{"<"}array[j-1])
        </h2>
        <h2 class="swap" style={{ marginRight: "85px" }}>
          swap(array[j], array[j-1])
        </h2>
        <h2 style={{ marginRight: "310px" }}> j=j-1</h2>
        <h2 style={{ marginRight: "350px" }}>end while</h2>
        <h2 style={{ marginRight: "450px" }}>end for</h2>
      </Container>
    );
  } else if (props.algoOption == "mergeSort") {
    return (
      <Container>
        {/* <h1 style={{ marginRight: "500px" }}> BubbleSort(array)</h1>
        <h2 style={{ marginRight: "400px" }}> for i=0 to N-2 </h2>
        <h2 style={{ marginRight: "300px" }}> for j=0 to N-2</h2>
        <h2 style={{ marginRight: "150px" }}> if array[i] {">"} array[i+1]</h2>
        <h2 class="swap" style={{ marginRight: "85px" }}>
          swap(array[i], array[i+1])
        </h2>
        <h2 style={{ marginRight: "310px" }}> end if</h2>
        <h2 style={{ marginRight: "350px" }}>end for</h2>
        <h2 style={{ marginRight: "450px" }}>end for</h2> */}
      </Container>
    );
  } else if (props.algoOption == "quickSort") {
    return (
      <Container>
        {/* <h1 style={{ marginRight: "500px" }}> BubbleSort(array)</h1>
        <h2 style={{ marginRight: "400px" }}> for i=0 to N-2 </h2>
        <h2 style={{ marginRight: "300px" }}> for j=0 to N-2</h2>
        <h2 style={{ marginRight: "150px" }}> if array[i] {">"} array[i+1]</h2>
        <h2 class="swap" style={{ marginRight: "85px" }}>
          swap(array[i], array[i+1])
        </h2>
        <h2 style={{ marginRight: "310px" }}> end if</h2>
        <h2 style={{ marginRight: "350px" }}>end for</h2>
        <h2 style={{ marginRight: "450px" }}>end for</h2> */}
      </Container>
    );
  } else return null;
};

export default AlgoText;

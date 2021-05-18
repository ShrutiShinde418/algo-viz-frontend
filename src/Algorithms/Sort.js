import React from "react";
import {
  Button,
  Segment,
  Divider,
  Progress,
  Grid,
  Icon,
} from "semantic-ui-react";
// import d3 from "d3-3";
import AlgoText from "./AlgoText";
import SortGraph from "./SortGraph";
const colorRed = "#ff3d00";
const colorYellow = "#ff9100";
const colorBlue = "#00897b";
const colorGreen = "#00e676";
let highlight = false;
function getSortData(count = 8) {
  var arr = [],
    i = 0;
  while (i++ < count) {
    let v = Math.floor(Math.random() * 90 + 10); //10~100
    arr.push({ v: v, color: colorBlue });
  }
  return arr;
}

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: getSortData(), algo: "", percent: 20 };
  }
  render() {
    return (
      <Segment.Group stacked>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>
              <Icon size="large" name="angle double left" />
            </Divider>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <SortGraph
                  data={this.state.data}
                  style={{ marginTop: "50px" }}
                />
              </Grid.Column>

              <Grid.Column>
                <AlgoText algoOption={this.state.algo} swapHigh={highlight} />
                <Progress
                  label="Set Speed"
                  style={{ marginTop: "10px" }}
                  percent={this.state.percent}
                  indicating
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment>
          <select id="select" class="ui labeled dropdown button massive">
            <option class="default text" value="abc" class="label">
              Algorithms
            </option>
            <option value="bubble">Bubble Sort</option>
            <option value="select">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="quickSort">Quick Sort</option>
          </select>
          <Button.Group labeled icon style={{ marginLeft: "60px" }}>
            <Button
              size="massive"
              icon="play"
              content="Run"
              className="btn"
              onClick={this.handleStart.bind(this)}
            ></Button>
            <Button
              size="massive"
              icon="chart bar"
              content="Generate Random Array"
              className="btn"
              onClick={this.handleReset.bind(this)}
            ></Button>
            <Button
              size="massive"
              icon="bolt"
              content="Speed"
              className="btn"
              onClick={this.increment}
            ></Button>
          </Button.Group>
        </Segment>
      </Segment.Group>
    );
  }
  // componentDidMount() {
  //   $("select").not(".disabled").material_select();
  // }
  increment = () => {
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 20 : prevState.percent + 20,
    }));
  };
  handleReset() {
    this.setState((prevState) => {
      return { data: getSortData() };
    });
    console.log("handleReset", ...this.state.data);
  }
  handleStart() {
    let select = document.getElementById("select").value;

    this.setState({ algo: select });
    //console.log("handleStart",select);
    if (!SortAlgorithm.hasOwnProperty(select)) {
      alert("Please Select An Algorithm!! Bakka!!");
      return;
    }
    //console.log(this.props);

    let data = this.state.data.slice();
    resetColor(data);

    let iter = SortAlgorithm[select](data);
    let go = function () {
      let currentData = iter.next();

      //console.log("next", currentData);

      if (!currentData.done) {
        this.setState((prevState) => {
          return { data: currentData.value };
        });
        setTimeout(go, 2300 - this.state.percent * 20);
      }
    }.bind(this);

    setTimeout(go, 0);

    // this.setState({ highlight: false });
  }
}

function resetColor(data) {
  data.forEach((v) => {
    v.color = colorBlue;
  });
}
window.Sort = Sort;
const SortAlgorithm = {
  bubble: function* (data) {
    var length = data.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - 1; j++) {
        data[j].color = colorYellow;
        yield data;
        if (data[j].v > data[j + 1].v) {
          highlight = true;
          data[j].color = data[j + 1].color = colorRed;
          yield data;
          let t = data[j].v;
          data[j].v = data[j + 1].v;
          data[j + 1].v = t;
          yield data;
          highlight = false;
        }
        resetColor(data);
      }
    }
  },
  select: function* (data) {
    var length = data.length,
      indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = i;
      for (var j = i; j < length; j++) {
        data[j].color = colorYellow;
        yield data;
        if (data[indexMin].v > data[j].v) {
          indexMin = j;
        }
        resetColor(data);
      }
      if (i !== indexMin) {
        highlight = true;
        data[indexMin].color = data[i].color = colorRed;
        yield data;
        let t = data[indexMin].v;
        data[indexMin].v = data[i].v;
        data[i].v = t;
        highlight = false;
        yield data;
      }
      resetColor(data);
    }
  },
  insertion: function* (data) {
    var length = data.length,
      j,
      temp;
    for (var i = 1; i < length; i++) {
      j = i;
      temp = data[i];
      data[j].color = colorYellow;
      yield data;
      resetColor(data);
      while (j > 0 && data[j - 1].v > temp.v) {
        highlight = true;
        data[j] = data[j - 1];
        j--;
      }
      highlight = false;
      if (i !== j) {
        data[j] = temp;
        data[j].color = colorRed;
        data[i].color = colorRed;
        yield data;
        resetColor(data);
      }
    }
  },
  mergeSort: function* (data) {
    var mergeRec = function* (arr) {
      let length = arr.length;
      if (length == 1) {
        return arr;
      }
      let mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length);

      left.forEach((v) => {
        v.color = colorBlue;
      });

      right.forEach((v) => {
        v.color = colorYellow;
      });

      //console.log("data", data);
      yield data;

      let mleft = yield* mergeRec(left);
      let mright = yield* mergeRec(right);

      let m = yield* merge(mleft, mright);
      return m;
    };
    var merge = function* (left, right) {
      if (!left || !right) return;
      let result = left.concat(right),
        re = [];
      //console.log("merge",result);
      let il = 0,
        ir = 0;
      right = right.map((v) => v.v);
      left = left.map((v) => v.v);
      while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
          re.push(left[il++]);
        } else {
          re.push(right[ir++]);
        }
      }
      while (il < left.length) {
        re.push(left[il++]);
      }
      while (ir < right.length) {
        re.push(right[ir++]);
      }
      result.forEach((v, i) => {
        result[i].v = re[i];
        v.color = colorGreen;
      });
      //console.log("merge result",result);
      yield data;
      return result;
    };

    yield* mergeRec(data);
  },
  quickSort: function* (data) {
    var quick = function* (data, left, right) {
      var index;
      if (data.length > 1) {
        index = yield* partition(data, left, right);
        if (left < index - 1) {
          yield* quick(data, left, index - 1);
        }
        if (index < right) {
          yield* quick(data, index, right);
        }
      }
    };
    var partition = function* (data, left, right) {
      var pivot = data[Math.floor((right + left) / 2)],
        j = right,
        i = left;

      pivot.color = colorGreen;
      data[left].color = data[right].color = colorGreen;
      yield data;
      resetColor(data);

      while (i <= j) {
        while (data[i].v < pivot.v) {
          i++;

          pivot.color = colorGreen;
          data[left].color = data[right].color = colorGreen;
          data[i].color = data[j].color = colorYellow;
          yield data;
          resetColor(data);
        }
        while (data[j].v > pivot.v) {
          j--;

          pivot.color = colorGreen;
          data[left].color = data[right].color = colorGreen;
          data[i].color = data[j].color = colorYellow;
          yield data;
          resetColor(data);
        }
        if (i <= j) {
          let temp = data[i];
          data[i] = data[j];
          data[j] = temp;

          pivot.color = colorGreen;
          data[left].color = data[right].color = colorGreen;
          data[i].color = data[j].color = colorYellow;
          yield data;
          resetColor(data);

          i++;
          j--;
        }
      }
      return i;
    };

    yield* quick(data, 0, data.length - 1);
  },
};

export { Sort as default };

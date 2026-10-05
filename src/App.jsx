import Button from "./Button.jsx";
import AddIcon from "./components/icons/AddIcon.jsx";
import ArrowRight from "./components/icons/ArrowRight.jsx";

import "./App.css";

function App() {
  return (
    <main>
      <h3>Simple Button Component in React</h3>
      {/* All Primary Buttons  */}
      <div className="button-container">
        {/* Primary Buttons  */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            variant="primary"
            trailingIcon={<ArrowRight />}
          >
            Button Label
          </Button>
          <Button variant="primary" trailingIcon={<ArrowRight />}>
            Button Label
          </Button>

          <Button leadingIcon={<AddIcon />} variant="primary">
            Button Label
          </Button>

          <Button variant="primary">Button Label</Button>
          <Button variant="primary icon-only" leadingIcon={<AddIcon />} />
        </div>
        {/* Secondary Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="secondary"
          >
            Button Label
          </Button>
          <Button trailingIcon={<ArrowRight />} variant="secondary">
            Button Label
          </Button>
          <Button leadingIcon={<AddIcon />} variant="secondary">
            Button Label
          </Button>
          <Button variant="secondary"> Button Label</Button>
          <Button variant="secondary icon-only" leadingIcon={<AddIcon />} />
        </div>
        {/* Outline Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="outline"
          >
            Button Label
          </Button>
          <Button trailingIcon={<ArrowRight />} variant="outline">
            Button Label
          </Button>
          <Button leadingIcon={<AddIcon />} variant="outline">
            Button Label
          </Button>
          <Button variant="outline"> Button Label</Button>
          <Button variant="outline icon-only" leadingIcon={<AddIcon />} />
        </div>
        {/* Link Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="link"
          >
            Button Label
          </Button>
          <Button trailingIcon={<ArrowRight />} variant="link">
            Button Label
          </Button>
          <Button leadingIcon={<AddIcon />} variant="link">
            Button Label
          </Button>
          <Button variant="link"> Button Label</Button>
          <Button variant="link icon-only" leadingIcon={<AddIcon />} />
        </div>
      </div>

      {/* All Destrutive Primary Buttons */}
      <div className="button-container">
        {/* Destrutive Primary Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="primary"
            destructive
          >
            Button Label
          </Button>
          <Button destructive trailingIcon={<ArrowRight />} variant="primary">
            Button Label
          </Button>
          <Button destructive leadingIcon={<AddIcon />} variant="primary">
            Button Label
          </Button>
          <Button destructive variant="primary">
            {" "}
            Button Label
          </Button>
          <Button
            destructive
            variant="primary icon-only"
            leadingIcon={<AddIcon />}
          />
        </div>
        {/* Destrutive Secondary Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="secondary"
            destructive
          >
            Button Label
          </Button>
          <Button destructive trailingIcon={<ArrowRight />} variant="secondary">
            Button Label
          </Button>
          <Button destructive leadingIcon={<AddIcon />} variant="secondary">
            Button Label
          </Button>
          <Button destructive variant="secondary">
            {" "}
            Button Label
          </Button>
          <Button
            destructive
            variant="secondary icon-only"
            leadingIcon={<AddIcon />}
          />
        </div>
        {/* Destrutive Outline Buttons */}
        <div className="button-row">
          <Button
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="outline"
            destructive
          >
            Button Label
          </Button>
          <Button destructive trailingIcon={<ArrowRight />} variant="outline">
            Button Label
          </Button>
          <Button destructive leadingIcon={<AddIcon />} variant="outline">
            Button Label
          </Button>
          <Button destructive variant="outline">
            {" "}
            Button Label
          </Button>
          <Button
            destructive
            variant="outline icon-only"
            leadingIcon={<AddIcon />}
          />
        </div>
        {/* Destrutive Link Buttons */}
        <div className="button-row">
          <Button
            destructive
            leadingIcon={<AddIcon />}
            trailingIcon={<ArrowRight />}
            variant="link"
          >
            Button Label
          </Button>
          <Button destructive trailingIcon={<ArrowRight />} variant="link">
            Button Label
          </Button>
          <Button destructive leadingIcon={<AddIcon />} variant="link">
            Button Label
          </Button>
          <Button destructive variant="link">
            {" "}
            Button Label
          </Button>
          <Button
            destructive
            variant="link icon-only"
            leadingIcon={<AddIcon />}
          />
        </div>
      </div>
    </main>
  );
}

export default App;

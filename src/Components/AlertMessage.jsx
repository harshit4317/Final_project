import { useState, Fragment } from "react";
import { Alert, Button } from "@material-tailwind/react";
 
export default function AlertMessage(props) {
  const [open, setOpen] = useState(true);
  
  return (
    props.alert &&

    <Fragment>
      <Alert className={`bg-${props.alert.type==="Dark "?"blue-800":"blue-500"}`}
        open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        <strong>{props.alert.type}</strong>{props.alert.msg}
      </Alert>
    </Fragment>
  );
}
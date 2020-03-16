import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => {

})

export default function Query(props) {
    const classes = useStyles()
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)
    const [q4, setQ4] = useState(false)
    const [q5, setQ5] = useState(false)
    const [q6, setQ6] = useState(false)
    const [q7, setQ7] = useState(false)
    const [q8, setQ8] = useState(false)

    function resetQuery() {
        setQ1(false)
        setQ2(false)
        setQ3(false)
        setQ4(false)
        setQ5(false)
        setQ6(false)
        setQ7(false)
        setQ8(false)
        props.setBeer(false)
        props.setResult("")
    }
   


    function seeResult() {
        if (q1 && q2 === false && q3 && q4 === false && q5 === false && q6 === false && q7 === false && q8 === false){
            props.setResult("YOU ARE SAFE FROM CORONA")
        } else {
            props.setResult("YOU MUST HAVE DONE SOMETHING WRONG CUZ ITS CORONA TIME!!!!")
            props.setBeer(true)
            
        }
    }

    return (
        <div>
            <form>
            <FormControlLabel
        control={
          <Checkbox
            checked={q1}
            onChange={(e) => setQ1(e.target.checked)}
            value={q1}
            color="primary"
          />
        }
        label="HAVE YOU WASHED YOUR HANDS 600 TIMES?"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q2}
            onChange={(e) => setQ2(e.target.checked)}
            value={q2}
            color="primary"
          />
        }
        label="HAVE YOU BEEN IN CONTACT WITH HUMANS TODAY?"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q3}
            onChange={(e) => setQ3(e.target.checked)}
            value={q3}
            color="primary"
          />
        }
        label="HAVE YOU TAKEN 600000000 SHOWERS TODAY?
        "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q4}
            onChange={(e) => setQ4(e.target.checked)}
            value={q4}
            color="primary"
          />
        }
        label="HAVE YOU COME OUT OF YOUR ROOM TODAY?
        "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q5}
            onChange={(e) => setQ5(e.target.checked)}
            value={q5}
            color="primary"
          />
        }
        label="HAVE YOU EATEN A BAT TODAY?
        "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q6}
            onChange={(e) => setQ6(e.target.checked)}
            value={q6}
            color="primary"
          />
        }
        label="HAVE YOU GIVEN CPU TO A SNAKE TODAY?
        "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q7}
            onChange={(e) => setQ7(e.target.checked)}
            value={q7}
            color="primary"
          />
        }
        label="HAVE YOU LICKED A DOORKNOB TODAY?
        "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={q8}
            onChange={(e) => setQ8(e.target.checked)}
            value={q8}
            color="primary"
          />
        }
        label="HAS A GOAT TOUCHED YOUR FACE TODAY?
        "
      />
      <Button variant="contained" style={{margin:8}} color="primary" onClick={seeResult}>
  See Results
</Button>
<Button variant="contained" color="secondary" onClick={resetQuery}>
  Reset
</Button>
            </form>
        </div>
    )
}

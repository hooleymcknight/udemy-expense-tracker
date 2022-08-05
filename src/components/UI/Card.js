import './Card.css'

const Card = (props) => {
    const classes = `card ${props.className}`
    const filtered_props = Object.keys(props).filter(x => x !== 'className' && x !== 'children')
    if (filtered_props.length) {
        filtered_props.forEach((sub_prop) => {
            const attribute = sub_prop
            let value = props[sub_prop]
            if (sub_prop === 'data-filtered-year') {
                // 
            }
        })
    }
    
    return <div className={classes}>{props.children}</div>
}

export default Card
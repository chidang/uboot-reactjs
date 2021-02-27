const IconItem = props => {
    return (
        <li>
            <div className="d-flex flex-column bg-thirtary text-center relative shadow-hover default br2 hide-child">
            <span className="d-flex flex-column bg-thirtary items-center text-center color-inherit w-100 py-3 rounded-top no-underline hover-bg-blue4 hover-white gray4">
              <i className={`${props.prefix}${props.icon.label}`} style={{fontSize: "2rem"}}></i>
            </span>
            <div className="w-100 py-2 tc f2 text-truncate">
              <span className="icon-name">{props.icon.label}</span>
            </div>
          </div>
        </li>
    )
}

export default IconItem;

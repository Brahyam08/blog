import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">The World</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/250609/pexels-photo-250609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Book" />
        </div>
    )
}

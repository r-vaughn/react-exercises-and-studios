
export default function HobbyLinks() {
    let hobbyLinks = ["www.target.com", "www.starbucks.com"]; 
    
    return(
        <div>
            <h3>Hobbies</h3>
            <a href={hobbyLinks[0]}>Target</a> <br />
            <a href={hobbyLinks[1]}>Starbucks</a>
        </div>
    );
}
export default function Menu() {
    return (
        <div className="bg-gray-300  h-96 w-full">
            <h1>OUR MENU</h1>
            <div>
                <ul>
                    <li>Turkey</li>
                    <li>Fish</li>
                    <li>Barbeque</li>
                    <li>Drinks</li>
                </ul>
                <div className="grid grid-cols-4">
                    <div>
                        <img src="./images/ceo.png" alt="" className="w-24 h-24" />
                        <p>Olusegun</p>
                        <p>2500</p>
                    </div>

                   
                   
                    
                </div>
            </div>

        </div>
    );
}
import React from 'react'

function Accordion() {
    const arr=[1,2,3,4,5]
    return (
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Book Issued to following Students
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        {arr.map((st, key) => (
                            <h3>{st}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion

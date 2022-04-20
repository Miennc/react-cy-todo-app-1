import React, { Component } from 'react'

export default class extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {
                    [1, 2].map(() => {
                        return (
                            <div className=" mt-4 w-96  h-auto mx-auto bg-red-400 p-5 grid  grid-cols-3 rounded">
                                <div className="font-bold text-2xl col-span-1">
                                    {this.props.content}
                                </div>
                                <div className="w-full h-44 overflow-hidden col-span-2">
                                    <img src={this.props.img} className="object-cover w-full h-full " />
                                </div>
                            </div>
                        )
                    })
                }
                <div className="mt-4 w-96  h-auto mx-auto bg-red-4 00 p-5 flex justify-between rounded">
                    <i class="fa-solid fa-bars cursor-pointer" onClick={()=>{
                    

                    }}></i>
                    <i class="fa-solid fa-align-center cursor-pointer"></i>
                    <i class="fa-solid fa-bars cursor-pointer"></i>
                </div>
            </div>
        )
    }
}

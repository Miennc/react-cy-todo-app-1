import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="container mx-auto">
          <div className="flex justify-between mt-4 w-96 h-auto mx-auto">
              <div className="mt-3 font-bold text-3xl">SHOES</div>
              <div className="overflow-hidden w-24 h-24">
                  <img src="https://i.pinimg.com/originals/fd/04/c6/fd04c6ff185e1c09843afab339d216b7.jpg" className="object-cover rounded-full" />
              </div>
          </div>
      </div>
    )
  }
}

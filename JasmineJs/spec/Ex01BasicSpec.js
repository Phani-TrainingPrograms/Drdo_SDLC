xdescribe("First Example on UnitTesting", ()=>{
  //every test case will be provided by a it function. 
  it("Should get hello world", ()=>{
    expect("Hello worlds").toBe("Hello worlds")
  })

  it("Shall try numeric", ()=>{
    expect(2 + 5).toBe(7)
  })

  it("Shall try for bool", ()=>{
    expect(true).toBeTrue()
  })
})
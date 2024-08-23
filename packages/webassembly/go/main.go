package main

import "github.com/bytecodealliance/wasmtime-go/v24"

func main() {
	store := wasmtime.NewStore(wasmtime.NewEngine())
}

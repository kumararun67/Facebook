package com.stepdefinition;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class DataDemo {
	public static void main(String [] arg) {
	//2D without header
	List<ArrayList<String>> l=new ArrayList<ArrayList<String>>();	
	ArrayList<String>m=new ArrayList<String>();
	m.add("arun");
	m.add("Kumar");
	m.add("dude");
	ArrayList<String>m1=new ArrayList<String>();
	m1.add("arun");
	m1.add("Kumar");
	m1.add("dude");
	l.add(m);
	l.add(m1);
	ArrayList<String>ar=l.get(0);
	String String=ar.get(1);
	System.out.println(String);
	}
}

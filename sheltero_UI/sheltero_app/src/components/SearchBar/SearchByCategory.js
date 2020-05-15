import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import {JobCategory} from '../../models/JobCategory';
import styled from "styled-components";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-weight: bold;
`;

const InputWrapper = styled('div')`
  width: 40vw;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  
  
  &:hover {
    border-color: #343078;
    box-shadow: 0 0 0 2px rgb(223, 252, 3)
  }
  &.focused {
    border-color: #638709;
    ;
  }
  & input {
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    border: 0;
    margin: 0;
    outline: 0;
  }
`;

const Tag = styled(({ label, onDelete, ...props }) => (
    <div {...props}>
        <span>{label}</span>
        <CloseIcon onClick={onDelete} />
    </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #99C015;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;
  &:focus {
    border-color: #638709;
    background-color: #e6f7ff;
    
  }
  & span {
    overflow: hidden;
    white-space: nowrap;
    font-family: "Lucida Console", Courier, monospace;
    text-overflow: ellipsis;
    
  }
  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
    
  }
`;

const Listbox = styled('ul')`
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #fff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  
  & li {
    padding: 5px 12px;
    display: flex;
    & span {
      flex-grow: 1;
    }
    & svg {
      color: transparent;
    }
  }
  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;
    & svg {
      color: #638709;
    }
  }
  & li[data-focus='true'] {
    background-color: #DAE6AC;
    cursor: pointer;
    & svg {
      color: #638709;
    }
  }
`;


export default function SearchByCategory() {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getTagProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
        value,
        focused,
        setAnchorEl,
    } = useAutocomplete({
        id: 'customized-hook-demo',
        defaultValue: [JobCategory[1]],
        multiple: true,
        options: JobCategory,
        getOptionLabel: (option) => option.category,
    });

    return (
        <NoSsr>
            <div>
                <div {...getRootProps()}>
                    <Label {...getInputLabelProps()}>
                        Select keywords to search
                    </Label>
                    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                        {value.map((option, index) => (
                            <Tag label={option.category} {...getTagProps({ index })} />
                        ))}

                        <input {...getInputProps()} />
                    </InputWrapper>
                </div>
                {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                        {groupedOptions.map((option, index) => (
                            <li {...getOptionProps({ option, index })}>
                                <span>{option.category}</span>
                                <CheckIcon fontSize="small" />
                            </li>
                        ))}
                    </Listbox>
                ) : null}
            </div>
        </NoSsr>
    );
}


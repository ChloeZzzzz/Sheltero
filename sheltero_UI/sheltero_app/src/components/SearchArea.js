import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import NoSsr from '@material-ui/core/NoSsr';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
  font-weight: bold;
`;

const InputWrapper = styled('div')`
  
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
    text-align:left;
    flex-Grow:1;
    color:grey;
    
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

export default function SearchByArea() {
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
        id: 'SearchByArea',
        defaultValue: [MelbourneArea[1]],
        multiple: true,
        options: MelbourneArea,
        getOptionLabel: (option) => option.name,
    });

    return (
        <NoSsr>
            <div>
                <div {...getRootProps()}>
                    <Label {...getInputLabelProps()}>
                        Select Area to search
                    </Label>
                    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                        {value.map((option, index) => (
                            <Tag label={option.name} {...getTagProps({ index })} />
                        ))}

                        <input {...getInputProps()} />
                    </InputWrapper>
                </div>
                {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                        {groupedOptions.map((option, index) => (
                            <li {...getOptionProps({ option, index })}>
                                <span>{option.name}</span>
                                <CheckIcon fontSize="small" />
                            </li>
                        ))}
                    </Listbox>
                ) : null}
            </div>
        </NoSsr>
    );
}
const MelbourneArea = [
  { name: 'Carlton', code: 3053 },
  { name: 'Carlton North', code: 3054 },
  { name: 'Docklands', code: 3008 },
  { name: 'East Melbourne', code: 3002 },
  { name: 'Flemington', code: 3031 },
  { name: "Kensington", code: 3031 },
  { name: 'Melbourne (Central business district)', code: 3000 },
  { name: 'Melbourne (St Kilda Road area, shared with City of Port Phillip)', code: 3004 },
  { name: 'North Melbourne ', code: 3051 },
  { name: 'Parkville', code: 3052 },
  { name: 'Port Melbourne', code: 3207 },
  { name: 'Southbank', code: 3006  },
  { name: 'South Wharf', code: 3006 },
  { name: 'South Yarra', code: 3141 },
  { name: 'TWest Melbourne', code: 3003 },
];
